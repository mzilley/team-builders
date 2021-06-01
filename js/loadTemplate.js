jQuery(document).ready(function ($) {
  const templates = ["footer", "navbar", "contactus"];

  templates.forEach((template) => {
    $(`#${template}`).load(`templates/${template}.html`);
  });
});