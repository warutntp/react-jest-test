const Invalid = () => {
  return (
    <div>
      <input data-testid="no-aria-invalid" placeholder="no-aria-invalid" />
      <input
        data-testid="aria-invalid"
        placeholder="aria-invalid"
        aria-invalid
      />
      <input
        data-testid="aria-invalid-value"
        placeholder="aria-invalid-value"
        aria-invalid="true"
      />
      <input
        data-testid="aria-invalid-false"
        placeholder="aria-invalid-false"
        aria-invalid="false"
      />

      <form data-testid="valid-form">
        <input placeholder="valid-form" />
      </form>

      <form data-testid="invalid-form">
        <input placeholder="nvalid-form" required />
      </form>
    </div>
  );
};

export default Invalid;
