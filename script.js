class WordPlay {
  constructor({
    className,
    mode = "word",
    offset = 0,
    speed = 1,
    delay = 0.01,
  }) {
    if (!className) {
      throw new Error("A paragraph element is required");
    }

    this.className = className;
    this.mode = mode;
    this.offset = offset;
    this.speed = speed;
    this.delay = delay;
    this.init();
  }

  init() {
    const paragraphs = document.querySelectorAll("." + this.className);

    paragraphs.forEach((p) => {
      let elements;

      if (this.mode === "word") {
        const words = p.innerText.split(" ");

        elements = words.map((word, i) => {
          const span = document.createElement("span");
          span.innerText = word + " ";
          span.style.opacity = 0;
          span.style.transitionDelay = i * parseFloat(this.delay) + "s";
          span.className = "ws__span";

          return span;
        });
      }

      if (this.mode === "letter") {
        const letters = p.innerText.split("");

        elements = letters.map((letter, i) => {
          const span = document.createElement("span");
          span.innerText = letter;
          span.style.opacity = 0;
          span.style.transitionDelay = i * parseFloat(this.delay) + "s";
          span.className = "ws__span";

          return span;
        });
      }

      p.innerHTML = "";

      elements.forEach((el) => {
        p.appendChild(el);
      });
    }, this);

    window.addEventListener("scroll", this.reveal.bind(this));
    window.addEventListener("resize", this.reveal.bind(this));

    this.reveal();
  }

  reveal() {
    const paragraphs = document.querySelectorAll("." + this.className);

    paragraphs.forEach((p) => {
      const fadeInElements = p.querySelectorAll(".ws__span");

      fadeInElements.forEach((el, i) => {
        const boundingClientRect = el.getBoundingClientRect();
        const topOffset =
          boundingClientRect.top - window.innerHeight + this.offset;

        if (topOffset < 0) {
          el.style.transition =
            "opacity " + this.speed + "s" + " " + i * this.delay + "s";
          el.style.opacity = 1;
        }
      }, this);
    }, this);
  }
}
