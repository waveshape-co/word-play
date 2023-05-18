# WordPlay

Super easy word & letter reveals.

## Usage

Import the code

```
<script src="https://cdn.jsdelivr.net/gh/waveshape-co/word-play@1.0.0/script.min.js"></script>
```

Init

```
document.addEventListener("DOMContentLoaded", () => {
  new WordPlay({
    className: "hero-heading",
    mode: "letter",
    offset: 100,
    speed: 0.5,
    delay: 0.025,
  });
});
```

## Options

### className

The class name of any p-element you wish to reveal when visible.

### mode

Either "word" or "letter". These modes either splits and reveals the paragraph(s) by word or letter.

### offset

The offset (in pixels) of which the reveal animation will start when the p-element gets visible.

### speed

The speed of which each splitted element (word or letter) gets revealed.

### delay

The stagger delay between animated words or letters.
