<template>
    <ul class="projects">
        <li class="projects__item" v-for="project in projects">
            <a v-link="{ path: '/project/' + project.id }">
                {{ project.name }}
                <small>{{ project.description }}</small>
            </a>
        </li>
    </ul>
</template>

<script>
    module.exports = {
        data() {
            return {
                projects: []
            };
        },
        ready() {
            this.getProjects();
        },
        methods: {
            getProjects() {
                this.$http.get('http://adr.dev/api/v1/projects').then((resp) => {
                    this.projects = resp.data;
                }, (resp) => {
                    alert('error occured');
                });
            }
        }
    }
</script>