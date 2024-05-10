const Valid = () => {
  return (
    <div>
      <input placeholder="no-aria-invalid" data-testid="no-aria-invalid" />
      <input
        placeholder="aria-invalid"
        data-testid="aria-invalid"
        aria-invalid
      />
      <input
        placeholder="aria-invalid-value"
        data-testid="aria-invalid-value"
        aria-invalid="true"
      />
      <input
        placeholder="aria-invalid-false"
        data-testid="aria-invalid-false"
        aria-invalid="false"
      />

      <form data-testid="valid-form">
        <input placeholder="valid-form" />
      </form>

      <form data-testid="invalid-form">
        <input placeholder="invalid-form" required />
      </form>
    </div>
  );
};

export default Valid;
