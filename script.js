document.addEventListener("DOMContentLoaded", function () {
  // Image preview
  const passportInput = document.getElementById("passport_photo");
  const passportPreview = document.getElementById("preview_passport_photo");
  const passportFilename = document.getElementById("filename_passport_photo");

  passportInput.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
      passportFilename.textContent = `File: ${file.name}`;
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = function (e) {
          passportPreview.innerHTML = `<img src="${e.target.result}" alt="Preview" style="max-height: 150px;" />`;
        };
        reader.readAsDataURL(file);
      } else {
        passportPreview.innerHTML = '';
      }
    }
  });

  // PDF Preview helper
  function previewPDF(inputId, previewId, filenameId) {
    const input = document.getElementById(inputId);
    const preview = document.getElementById(previewId);
    const filename = document.getElementById(filenameId);

    input.addEventListener("change", function () {
      const file = this.files[0];
      if (file) {
        filename.textContent = `File: ${file.name}`;
        if (file.type === "application/pdf") {
          const reader = new FileReader();
          reader.onload = function (e) {
            preview.innerHTML = `<embed src="${e.target.result}" type="application/pdf" width="100%" height="200px" />`;
          };
          reader.readAsDataURL(file);
        } else {
          preview.innerHTML = '';
        }
      }
    });
  }

  previewPDF("rsfi_form", "preview_rsfi_form", "filename_rsfi_form");
  previewPDF("aadhar_card", "preview_aadhar_card", "filename_aadhar_card");
  previewPDF("dob_certificate", "preview_dob_certificate", "filename_dob_certificate");
});
