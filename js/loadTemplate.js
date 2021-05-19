jQuery(document).ready(function($) {
  const templates = ["footer", "navbar", "contactus", "footer-scripts"];

  templates.forEach((template) => {
    $(`#${template}`).load(`templates/${template}`);
  });
});