<template>
    <block>
        <div slot="title">{{ title }}</div>
        <div slot="description">{{ description }}</div>
        <div class="Block-samples" slot="content" v-html="markup"></div>
        <toggle slot="toggle">
            <markup language="markup" :code="markup"></markup>
        </toggle>
    </block>
</template>

<script>
import Block from '../../framework/organisms/Block'
import Toggle from '../../framework/molecules/Toggle.vue'
import Markup from '../../framework/atoms/Markup'

import '../../assets/scss/atoms/_tables.scss'

let markup = `
<table class="Table">
    <thead>
        <tr>
            <th>Payment</th>
            <th>Issue Date</th>
            <th>Amount</th>
            <th>Period</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td data-label="Payment">Payment #1</td>
            <td data-label="Issue Date">02/01/2015</td>
            <td data-label="Amount">$2,311</td>
            <td data-label="Period">01/01/2015 - 01/31/2015</td>
        </tr>
        <tr>
            <td data-label="Payment">Payment #2</td>
            <td data-label="Issue Date">03/01/2015</td>
            <td data-label="Amount">$3,211</td>
            <td data-label="Period">02/01/2015 - 02/28/2015</td>
        </tr>
    </tbody>
</table>

`

export default {
    name: 'Tables',
    components: {
        Block,
        Toggle,
        Markup
    },
    data () {
        return {
            title: 'Table',
            description: 'Some description',
            markup: markup
        }
    }
}
</script>

<style lang="scss">
</style>
