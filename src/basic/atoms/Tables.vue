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
.Table {
    border: 1px solid #ccc;
    border-collapse: collapse;
    border-spacing: 0;
    margin:0;
    padding:0;
    width: 100%;

    tr {
        border: 1px solid #ddd;
        padding: 5px;
    }

    th, td {
        padding: 10px;
        text-align: center;
    }

    th {
        font-size: 14px;
        letter-spacing: 1px;
        text-transform: uppercase;
    }
}

@media screen and (max-width: 600px) {
    .Table {
        border: 0;

        thead { display: none; }

        tr {
            border-bottom: 2px solid #ddd;
            display: block;
            margin-bottom: 10px;
        }

        td {
            border-bottom: 1px dotted #ccc;
            display: block;
            font-size: 13px;
            text-align: right;

            &:last-child { border-bottom: 0; }

            &::before {
                content: attr(data-label);
                float: left;
                font-weight: bold;
                text-transform: uppercase;
            }
        }
    }
}
</style>
