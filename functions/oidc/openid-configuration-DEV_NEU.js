exports.configuration = {
    "issuer": "https://gateway.demo.eid-plus.com",
    "authorization_endpoint": "https://gateway.demo.eid-plus.com/authorize",
    "token_endpoint": "https://gateway.demo.eid-plus.com/token",
    "userinfo_endpoint": "https://gateway.demo.eid-plus.com/userinfo",
    "end_session_endpoint": "https://gateway.demo.eid-plus.com/end-session",
    "introspection_endpoint": "https://gateway.demo.eid-plus.com/introspect",
    "response_types_supported": ["code", "id_token", "id_token token", "code token", "code id_token", "code id_token token"],
    "jwks_uri": "https://gateway.demo.eid-plus.com/jwks",
    "id_token_signing_alg_values_supported": ["HS256", "RS256"],
    "subject_types_supported": ["public"],
    "token_endpoint_auth_methods_supported": ["client_secret_post", "client_secret_basic"],
    "check_session_iframe": "https://gateway.demo.eid-plus.com/check-session-iframe",
    "redirect_uri_web_dev": "http://localhost:8100/return",
    "redirect_uri_web_prod": "https://app.ecollect.sh/return",
    "redirect_uri_mobile_prod": "ecollectapp://return"
}