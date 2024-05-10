const HaveAccessibleDescription = () => {
  return (
    <div>
      <a
        data-testid="link"
        href="/"
        aria-label="Home page"
        title="A link to start over"
      >
        Start
      </a>
      <a data-testid="extra-link" href="/about" aria-label="About page">
        About
      </a>
      <img src="avatar.jpg" data-testid="avatar" alt="User profile pic" />
      <img
        src="logo.jpg"
        data-testid="logo"
        alt="Company logo"
        aria-describedby="t1"
      />
      <span id="t1" role="presentation">
        The logo of Our Company
      </span>
    </div>
  );
};

export default HaveAccessibleDescription;
