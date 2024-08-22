"use strict";

function get_parallax_mountain_effect_section() {
  return document.querySelector(".mountain-parallax-effect");
}

function create_parallax_mountain_effect_elements() {
  /**
     * <div class="mountain-parallax-effect-wrapper">
          <img
            class="mountain-transparent-image"
            src="assets/img/montanha-fundo-transparente.png"
            alt="Imagem de uma montanha com fundo transparente."
          />
          <h1 class="mountain-parallax-test-text">
            Página Teste
          </h1>
        </div>
     */
  const wrapper = document.createElement("div");

  wrapper.classList.add("mountain-parallax-effect-wrapper");

  const mountain_image = document.createElement("img");

  mountain_image.classList.add("mountain-transparent-image");
  mountain_image.src = "assets/img/montanha-fundo-transparente.png";
  mountain_image.alt = "Imagem de uma montanha com fundo transparente.";

  wrapper.appendChild(mountain_image);

  const test_text = document.createElement("h1");
  const test_text_content = document.createTextNode("Página Teste");

  test_text.classList.add("mountain-parallax-test-text");

  test_text.appendChild(test_text_content);

  wrapper.appendChild(test_text);

  return wrapper;
}

function load_parallax_mountain_effect_elements(section, elements) {
  section.appendChild(elements);
}

function get_element_from(parent, element) {
  return parent.querySelector(element);
}

function get_parallax_mountain_image(elements) {
  return get_element_from(elements, ".mountain-transparent-image");
}

function get_parallax_test_text(elements) {
  return get_element_from(elements, ".mountain-parallax-test-text");
}

function load_parallax_mountain_effect() {
  const parallax_mountain_effect_section =
    get_parallax_mountain_effect_section();
  const parallax_mountain_effect_elements =
    create_parallax_mountain_effect_elements();

  load_parallax_mountain_effect_elements(
    parallax_mountain_effect_section,
    parallax_mountain_effect_elements
  );

  const parallax_mountain_image = get_parallax_mountain_image(
    parallax_mountain_effect_elements
  );

  const parallax_test_text = get_parallax_test_text(
    parallax_mountain_effect_elements
  );

  const default_parallax_mountain_image_scale = parseInt(
    getComputedStyle(parallax_mountain_image).scale
  );

  window.addEventListener("scroll", (evento) => {
    const current_scroll_y = window.scrollY;
    const parallax_mountain_effect_elements_height = parseInt(
      getComputedStyle(parallax_mountain_effect_elements).height
    );
    const parallax_mountain_effect_section__height = parseInt(
      getComputedStyle(parallax_mountain_effect_section).height
    );

    if (
      current_scroll_y <=
      parallax_mountain_effect_section__height -
        parallax_mountain_effect_elements_height
    ) {
      parallax_mountain_effect_elements.style.top = `${current_scroll_y}px`;
      parallax_mountain_image.style.scale = `${
        default_parallax_mountain_image_scale -
        current_scroll_y /
          (parallax_mountain_effect_section__height -
            parallax_mountain_effect_elements_height)
      }`;

      parallax_test_text.style.bottom = `${
        (60 * current_scroll_y) /
        (parallax_mountain_effect_section__height -
          parallax_mountain_effect_elements_height)
      }%`;
    }
  });
}

function exists_parallax_mountain_section() {
  return !!get_parallax_mountain_effect_section();
}

function main() {
  if (exists_parallax_mountain_section()) {
    load_parallax_mountain_effect();
  }
}

main();
