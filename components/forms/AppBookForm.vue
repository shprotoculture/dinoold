<template lang="pug">
    .book-form
        form
            .book-form__heading
                h4 Заполните форму
                p и получите бесплатно книгу с озвучкой 
                    br
                    | “Все о динозаврах”
            .book-form__body
                .p-15
                    .input
                        input(type="text" placeholder="Ваше имя *")
                .p-15
                    .input
                        input(type="email" placeholder="E-mail *")
                .p-15
                    .input
                        input(type="text" placeholder="Телефон *")
                .p-15
                    .input
                        input(type="text" placeholder="День рождения Вашего ребенка *")
                .p-15
                    .input
                        input(type="text" placeholder="Имя Вашего ребенка *")
                .p-15
                    .checkbox
                        input(type="checkbox" id="submit_pol")
                        label(for="submit_pol") Даю согласие на обработку персональных данных
                .p-15
                    button.button.button--submit.button--large(type="submit") ПОЛУЧИТЬ КНИГУ
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "~assets/scss/vars";

.book-form {
    max-width: 450px;
    margin: 0 auto;
    background: #fff;
    border-radius: 10px;
    &__heading {
        text-align: center;
        padding: 30px;
        border-bottom: 1px dotted #f2f2f2;
        h4 {
            font-size: 24px;
            font-weight: 300;
            text-transform: uppercase;
            margin-bottom: 5px;
        }
        p {
            font-size: 16px;
            font-weight: 300;
        }
    }
    &__body {
        padding: 15px;
    }
}
</style>
