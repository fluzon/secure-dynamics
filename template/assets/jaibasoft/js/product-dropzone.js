var FormDropzone = function () {



    return {
        //main function to initiate the module
        init: function () {
            Dropzone.options.myDropzone = {
                dictDefaultMessage: "",
                previewsContainer: "#uploaded_files",
                thumbnailWidth: 80,
                thumbnailHeight: 60,
                clickable: "#addPhotoFileButton",
                previewTemplate: document.querySelector('#added-file-template-container').innerHTML,

                init: function() {
                    this.on("addedfile", function(file) {
                        // Create the remove button
                        //var removeButton = Dropzone.createElement("<a href='javascript:;'' class='btn red btn-sm btn-block'>Remove</a>");
                        var removeButton = Dropzone.createElement('<a class=\"fa fa-close remove\" href=\"javascript:;\"></a>');

                        // Capture the Dropzone instance as closure.
                        var _this = this;

                        // Listen to the click event
                        removeButton.addEventListener("click", function(e) {
                          // Make sure the button click doesn't submit the form:
                          e.preventDefault();
                          e.stopPropagation();

                          // Remove the file preview.
                          _this.removeFile(file);
                          // If you want to the delete the file on the server as well,
                          // you can do the AJAX request here.
                        });

                        // Add the button to the file preview element.
                        file.previewElement.appendChild(removeButton);
                    });

                }
            }
        }
    };
}();



jQuery(document).ready(function() {
   FormDropzone.init();
});
