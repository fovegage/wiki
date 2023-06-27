<template>
    <div class="footer">
        <div class="icons" v-if="social && social.icons">
            <a
                    :href="item.link"
                    :title="item.title"
                    :class="['iconfont', item.iconClass]"
                    v-for="(item, index) in social.icons"
                    :key="index"
                    target="_blank"
            ></a>
        </div>
        <template v-if="footer">
            | Copyright © {{ footer.createYear }}-{{ new Date().getFullYear() }}
            <span v-html="footer.copyrightInfo"></span>
        </template>
        <!--Vdoing主题遵循MIT协议，完全开源且免费。如果您对主题的修改并不大，希望您保留主题的链接。-->
        All Rights Reserved
        <a
                href="https://beian.miit.gov.cn/#/Integrated/index"
                target="_blank"
                title="备案号"
        >鲁ICP备20001560号-4</a>

    </div>
</template>

<script>
export default {
    computed: {
        social() {
            return this.$themeConfig.social
        },
        footer() {
            return this.$themeConfig.footer
        }
    }
}
</script>

<style lang='stylus'>
// $mobileSidebarWidth = $sidebarWidth * 0.82
.footer
padding

5
rem

1.5
rem

2.5
rem
text-align center
color #666
box-sizing border-box
font-size

0.85
rem
transition all

0.2
s ease
> span
line-height

1.5
rem
.icons
margin-bottom

12
px
.iconfont
padding

0
10
px
font-size

1.3
rem
a
color inherit
&:hover
color $accentColor

@media (min-width

(
$MQMobile +

1
px

)
)
.sidebar-open .footer
width auto
padding-left:

(
$sidebarWidth +

1.5
rem

)
@media (min-width

1520
px

)
.have-rightmenu .footer
padding-right:

(
$rightMenuWidth +

1.5
rem

)
.no-sidebar .footer
width auto
padding-left

1.5
rem
</style>
