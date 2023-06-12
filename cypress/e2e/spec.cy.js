import practiceFormPage from "../pageObjects/practiceForm.page.js";

describe("DemoQA spec", () => {
  context("Form filling", () => {
    beforeEach(() => {
      practiceFormPage.visit();
    });

    it("1. Form filling", () =>{

      practiceFormPage.firstNameField.type("Laurenss");
      practiceFormPage.lastNameField.type("Lablaiks");
      practiceFormPage.emailField.type("laurenss.lablaiks@va.lv");
      practiceFormPage.checkBoxField.click({force: true});
      practiceFormPage.phoneNumberField.type("22318019");
      practiceFormPage.dateOfBirthField.click({force: true});
      practiceFormPage.yearMenuSelect.select("1930");
      practiceFormPage.monthMenuSelect.select("2");
      practiceFormPage.dayMenuSelect.contains("28").click();
      practiceFormPage.subjectsField.type("Economics");
      practiceFormPage.autoSubjectSelect.click();
      practiceFormPage.musicCheckButton.click({force: true});
      practiceFormPage.pictureUploadButton.get("input[type=file]").selectFile("files/images.jpg");
      practiceFormPage.currentAddressField.type("Rīgas iela 43");
      practiceFormPage.stateAndCitySelection.contains("Select State").click({force: true});
      practiceFormPage.selectNCRButton.click();
      practiceFormPage.stateAndCitySelection.contains("Select City").click({force: true});
      practiceFormPage.selectDelhiButton.click({force: true});
      practiceFormPage.submitButton.click({force: true});

      practiceFormPage.formTableValidate.contains("td", "Laurenss Lablaiks")
      practiceFormPage.formTableValidate.contains("td", "laurenss.lablaiks@va.lv")
      practiceFormPage.formTableValidate.contains("td", "Male")
      practiceFormPage.formTableValidate.contains("td", "22318019")
      practiceFormPage.formTableValidate.contains("td", "28 February,1930")
      practiceFormPage.formTableValidate.contains("td", "Economics")
      practiceFormPage.formTableValidate.contains("td", "Music")
      practiceFormPage.formTableValidate.contains("td", "images.jpg")
      practiceFormPage.formTableValidate.contains("td", "Rīgas iela 43")
      practiceFormPage.formTableValidate.contains("td", "NCR Delhi")
    });
  });
});