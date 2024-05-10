const Visible = () => {
  return (
    <div>
      <div data-testid="zero-opacity" style={{ opacity: 0 }}>
        Zero Opacity Example
      </div>
      <div data-testid="visibility-hidden" style={{ visibility: "hidden" }}>
        Visibility Hidden Example
      </div>
      <div data-testid="display-none" style={{ display: "none" }}>
        Display None Example
      </div>
      <div style={{ opacity: 0 }}>
        <span data-testid="hidden-parent">Hidden Parent Example</span>
      </div>
      <div data-testid="visible">Visible Example</div>
      <div data-testid="hidden-attribute" hidden>
        Hidden Attribute Example
      </div>
      <details>
        <summary>Title of hidden text</summary>
        Hidden Details Example
      </details>
      <details open>
        <summary>Title of visible text</summary>
        <div>Visible Details Example</div>
      </details>
    </div>
  );
};

export default Visible;
