---
layout: page
---

<script setup>
    import{
        VPTeamPage,
        VPTeamPageTitle,
        VPTeamMembers,
        VPTeamPageSection
    } from 'vitepress/theme';

    const coreMembers = [
        {
            avatar: 'https://github.com/yyx990803.png',
            name: 'Evan You',
            title: 'Creator of Vue',
            desc: 'this is my description of BIO',
            links: [
                {icon: 'github', link:'https://github.com/yyx990803.png'},
                {icon: 'twitter', link:'https://github.com/yyx990803.png'}
            ],
            org: 'Vue.js',
            orgLink: 'https://vuejs.org',
            sponsor: 'https://google.com'
        }
    ];

    const partners = [
        {
            avatar: 'https://github.com/yyx990803.png',
            name: 'Evan You',
            title: 'Creator of Vue',
            links: [
                {icon: 'github', link:'https://github.com/yyx990803.png'},
                {icon: 'twitter', link:'https://github.com/yyx990803.png'}
            ]
        },
                {
            avatar: 'https://github.com/yyx990803.png',
            name: 'Evan You',
            title: 'Creator of Vue',
            links: [
                {icon: 'github', link:'https://github.com/yyx990803.png'},
                {icon: 'twitter', link:'https://github.com/yyx990803.png'}
            ]
        },
                {
            avatar: 'https://github.com/yyx990803.png',
            name: 'Evan You',
            title: 'Creator of Vue',
            links: [
                {icon: 'github', link:'https://github.com/yyx990803.png'},
                {icon: 'twitter', link:'https://github.com/yyx990803.png'}
            ]
        }
    ];
</script>

<VPTeamPage>
    <VPTeamPageTitle>
        <template #title>Core Contributors</template>
        <template #lead>Thios are the core contributors</template>
    </VPTeamPageTitle>
    <VPTeamMembers 
        size="medium"
        :members="coreMembers"
    />
    <VPTeamPageSection>
        <template #title>Core Contributors</template>
        <template #lead>Thios are the core contributors</template>
        <template #members>
            <VPTeamMembers 
                size="small"
                :members="partners"
            />
        </template>
    </VPTeamPageSection>

</VPTeamPage>


<style>
    h1{
        color:red;
    }
</style>