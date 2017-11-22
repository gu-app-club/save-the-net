const LOB_API_KEY =
  process.env.NODE_ENV != "production"
    ? "test_7baea6cc03130384038e90b624d4a3a11b1"
    : process.env.LOB;

const STRIPE_PUBLIC_KEY =
  process.env.NODE_ENV != "production"
    ? "pk_test_YABJKguSbP5XcxnKjZ5JML2D"
    : "pk_live_VDQtEOscievPfMSwVxUCL50B";

const STRIPE_PRIVATE_KEY =
  process.env.NODE_ENV != "production"
    ? "sk_test_gOtKtBSsil3L6AWnpLPTvagI"
    : process.env.STRIPE_PRIVATE;

module.exports = { LOB_API_KEY, STRIPE_PUBLIC_KEY, STRIPE_PRIVATE_KEY };
