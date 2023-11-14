import JustValidate from 'just-validate';
// import IMask from 'imask';
// import { modal } from "./components/modal.js";

export default function validation() {
    const options = {
        errorFieldCssClass: 'is-error',
        errorLabelStyle: false,
        errorLabelCssClass: 'is-label-error',
    }

    const defaultFieldOptions = [
        {
            rule: 'required',
            errorMessage: 'Заполните поле',
        }
    ];

    const emailFieldOptions = [
        {
            rule: 'required',
            errorMessage: 'Заполните поле',
        },
        {
            rule: 'email',
            errorMessage: 'Введите корректный email',
        },
    ]

    const phoneFieldOptions = [
        {
            rule: 'required',
            errorMessage: 'Заполните поле',
        },
        {
            rule: 'minLength',
            value: 18,
            errorMessage: 'Недопустимый формат',
        },
    ];

    // Валидация форм
    const forms = document.querySelectorAll('[data-js-form]');

    forms.forEach((form) => {
        const validate = new JustValidate(form, options);
        const formFields = form.querySelectorAll('[data-js-form-field]');

        if (formFields.length) {
            for (let index = 0; index < formFields.length; index += 1) {
                const field = formFields[index];
                const fieldName = field.getAttribute('name');
                let fieldOptions = defaultFieldOptions;

                if (fieldName === "email") {
                    fieldOptions = emailFieldOptions;
                }

                if (fieldName === "phone") {
                    fieldOptions = phoneFieldOptions;

                    // IMask(field, {
                    //     mask: '+{7} (000) 000-00-00',
                    //     lazy: false,
                    // });
                }

                validate.addField(`[name="${fieldName}"]`, fieldOptions);
            }
        }

        // validate.onFail((fields) => {
        // 	isErrorFieldBox(fields);
        // });

        validate.onSuccess(() => {
            modal.open('#modal_success');
        });
    });
}

// // Check class error fieldbox
// function isErrorFieldBox (fields) {
// 	for (let key in fields) {
// 		let item = fields[key];
// 		const fieldBox = item['elem'].closest('.fieldBox');

// 		if (fieldBox) {
// 			if (!item['isValid']) {
// 				fieldBox.classList.add('is-error');
// 			} else {
// 				fieldBox.classList.remove('is-error');
// 			}
// 		}
// 	}
// }
