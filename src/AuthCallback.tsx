import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function AuthCallback() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const accessToken = searchParams.get("access_token");

        if (accessToken) {
            localStorage.setItem("access_token", accessToken);
        }

        navigate("/", { replace: true });
    }, [searchParams, navigate]);

    return <div>Authenticating...</div>;
}
