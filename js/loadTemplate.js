jQuery(document).ready(function($) {
  const templates = ["footer", "navbar", "contactus", "preloader"];

  templates.forEach((template) => {
    $(`#${template}`).load(`templates/${template}.html`);
  });
});