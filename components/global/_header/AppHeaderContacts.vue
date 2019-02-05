<template lang="pug">
    .header__contacts
        a.header__contacts-link.header__contacts-phone(href="tel:+79660326666") + 7 (966) 032-66-66
        br
        a.header__contacts-link.header__contacts-email(href="mailto:info@dinoshop.msk.ru") info@dinoshop.msk.ru
        p.header__contacts-time
            | Пн - Сб
            span.header__contacts-time-nums 10:00 - 21:00
</template>

<script>
export default {};
</script>

<style lang="scss">
.header__contacts {
    &-link {
        color: #4d4d4d;
        font-size: 12px;
        font-weight: 600;
        margin-top: 4px;
        text-decoration: underline;
    }

    &-time {
        color: #4d4d4d;
        font-size: 12px;
        font-weight: 600;
        margin-top: 4px;
        &-nums {
            display: inline-block;
            margin-left: 10px;
        }
    }

    @media screen and (max-width: 991px) {
        display: none;
    }
}
</style>
