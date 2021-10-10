import $ from 'jquery'
import validate from 'jquery-validation'
import '../pages/support_contact.scss'


// upload file
const supportContactAttachFile = document.querySelector("#supportContactAttachFile");

function getContactAttachFileName() {
    document.querySelector('.attach-file-name').value = this.files[0].name;
}

supportContactAttachFile.addEventListener('change', getContactAttachFileName);



// form validation
$(".support-contact__form").validate({
    rules: {
      supportContactName: "required",
      supportContactSubject: "required",
      supportContactCategory: "required",
      supportContactDescription: "required",
    },
    messages: {
      supportContactName: "Заполните это поле",
      supportContactSubject: "Заполните это поле",
      supportContactCategory: "Заполните это поле",
      supportContactDescription: "Заполните это поле",
    },
    submitHandler: function (form) {
      console.log('Send')
    }
  });