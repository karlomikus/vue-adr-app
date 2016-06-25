<template>
    <div class="container">
        <div class="project">
            <h1 class="project__header">{{ project.name }}</h1>
            <div class="project__body">
                {{ project.description }}
            </div>
        </div>
    </div>
</template>

<script>
    module.exports = {
        ready() {
            this.getProject(this.$route.params.id);
        },
        data() {
            return {
                project: {
                    name: null,
                    description: null
                }
            };
        },
        methods: {
            getProject(id) {
                this.$http.get('http://adr.dev/api/v1/projects/' + id).then((resp) => {
                    this.project = resp.data;
                }, (resp) => {
                    alert('error occured');
                });
            }
        }
    }
</script>