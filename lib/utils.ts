/**
 * Verifies the current session token with the backend.
 * If valid, returns the user data and updates the local storage with the renewed token.
 * If invalid, clears local storage and throws an error.
 */
export async function verifySession() {
    const token = localStorage.getItem("accessToken");
    if (!token) {
        throw new Error("No token found");
    }

    try {
        const response = await fetch("/api/auth/verify-session", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            if (response.status === 401) {
                // Access token expired, attempt to refresh via cookie
                const refreshRes = await fetch("/api/auth/refresh", {
                    method: "POST",
                });

                if (!refreshRes.ok) throw new Error("Unable to refresh session");

                const refreshData = await refreshRes.json();
                localStorage.setItem("accessToken", refreshData.accessToken);

                // Retry original request with new token
                const retryRes = await fetch("/api/auth/verify-session", {
                    headers: {
                        Authorization: `Bearer ${refreshData.accessToken}`,
                    },
                });

                if (!retryRes.ok) throw new Error("Invalid token after refresh");

                const retryData = await retryRes.json();
                return retryData.user;
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message || "Invalid token");
            }
        }

        const data = await response.json();

        return data.user;
    } catch (error) {
        // Clear session on failure
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        throw error;
    }
}


