# camunda-modeler-self-signed-root-ca-test

This is a test that verifies the handling of self-signed (and OS trusted) certificates.

Related issue: [camunda/camunda-modeler#1432](https://github.com/camunda/camunda-modeler/issues/1432)


## Preparation

```bash
# generate certificate (root CA + server certificate)
./mkcerts

# add root cert to OS trust store (Arch Linux)
./install-root-cert-arch

# start test server
node server.js

# test that certificate is trusted
curl https://localhost:5000

# remove root cert from OS trust store (Arch Linux)
./uninstall-root-cert-arch
```

## Verify Modeler Behavior

Inside the Camunda Modeler

* Open deploy dialog
* Configure `https://localhost:5000` as your engine endpoint
* Attempt deploy
* __You will see a `SELF_SIGNED_CERT_IN_CHAIN` error__