function createSecretHolder(secret) {
    return {
        getSecret() {
            return secret;
        },
        setSecret(v) {
            secret = v;
        }
    }
}

obj = createSecretHolder(5)
obj.getSecret() // returns 5
obj.setSecret(2)
obj.getSecret() // returns 2
