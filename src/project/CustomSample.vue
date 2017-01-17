<template>
    <block v-bind:obj="component"></block>
</template>

<script>
import Block from '../organisms/Block'

let html = `
<div class="CustomSample">
    <img class="CustomSample-image" src="http://lorempixel.com/300/300">
    <div class="CustomSample-info">
        He says the restraining bolt has short circuited his recording system. He suggests that if you remove the bolt, he might be able to play back the entire recording. H'm? Oh, yeah, well, I guess you're too small to run away on me if I take this off! Okay. There you go. Well, wait a minute. Where'd she go? Bring her back! Play back the entire message. What message? The one you're carrying inside your rusty innards! Luke? Luke! Come to dinner! All right, I'll be right there, Aunt Beru. I'm sorry, sir, but he appears to have picked up a slight flutter. Well, see what you can do with him. I'll be right back. Just you reconsider playing that message for him. No, I don't think he likes you at all. No, I don't like you either.
    </div>
</div>
`;

export default {
    name: 'CustomSample',
    components: {
        Block
    },
    data () {
        return {
            component: {
                title: 'Custom Sample',
                description: 'A custom component for a project style guide, isolating it from the base style guide',
                code: [
                    html
                ]
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
/* Sample, it will be replaced by the compiled style */
.CustomSample {
    display: flex;
    font-size: 16px;

    &-image {
        flex: 0 0 300px;
        width: 100%;
    }

    &-info {
        line-height: 1.25;
        padding: 0 0 0 30px;
        width: 100%;
    }
}
</style>
