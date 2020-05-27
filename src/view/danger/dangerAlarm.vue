<template>
    <div>隐患反馈</div>
</template>>

<script>
export default {
    data() {
        return {

        }
    },
    created() {
        this.instance.get('/device/category/maxOnlineRate',{
             params: {
                 deptId: ''
             }
        }).then(res =>{
            console.log(res)
        })
    }
}
</script>

