<template>
    <div class="comment-tool">
        <div id="gitalk-container"></div>
    </div>
</template>

<script>
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk';
export default {
    mounted () {
        let gitalk = new Gitalk({
            clientID: '54fffddd8537f0f988ca',
            clientSecret: '0af8458524880fcfb95ac037f57d90435f0d5366',
            repo: 'web-abc',
            owner: 'skdream',
            admin: ['skdream'],
            id: location.pathname,      // Ensure uniqueness and length less than 50
            distractionFreeMode: false  // Facebook-like distraction free mode
            });
        gitalk.render('gitalk-container');
    }
}
</script>

<style lang="stylus">
    .comment-tool
        max-width 740px
        margin 0 auto
        padding 2rem 2.5rem
</style>

<!-- <style src="gitalk/dist/gitalk.css"></style> -->