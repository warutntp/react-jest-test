const Required = () => {
  return (
    <div>
      <input
        placeholder="required-input"
        data-testid="required-input"
        required
      />
      <input
        placeholder="aria-required-input"
        data-testid="aria-required-input"
        aria-required="true"
      />
      <input
        placeholder="conflicted-input"
        data-testid="conflicted-input"
        required
        aria-required="false"
      />
      <input
        placeholder="aria-not-required-input"
        data-testid="aria-not-required-input"
        aria-required="false"
      />
      <input placeholder="optional-input" data-testid="optional-input" />
      <input
        alt="unsupported"
        placeholder="unsupported-type"
        data-testid="unsupported-type"
        type="image"
        required
      />
      <select title="select" data-testid="select" required></select>
      <textarea
        placeholder="textarea"
        data-testid="textarea"
        required
      ></textarea>
      <div data-testid="supported-role" role="tree" required></div>
      <div
        data-testid="supported-role-aria"
        role="tree"
        aria-required="true"
      ></div>
    </div>
  );
};

export default Required;
