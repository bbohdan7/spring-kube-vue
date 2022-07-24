<template>
    <div>
        <sui-table celled striped selectable class="ui center aligned">
            <sui-table-header>
                <sui-table-row>
                    <sui-table-header-cell>View</sui-table-header-cell>
                    <sui-table-header-cell>ID</sui-table-header-cell>
                    <sui-table-header-cell>First name</sui-table-header-cell>
                    <sui-table-header-cell>Last name</sui-table-header-cell>
                    <sui-table-header-cell>Email</sui-table-header-cell>
                    <sui-table-header-cell>Actions</sui-table-header-cell>
                </sui-table-row>
            </sui-table-header>
            <sui-table-body>
                <sui-table-row v-for="user in all" :key="user.id">
                    <sui-table-cell :style="{ cursor: 'pointer' }">
                        <sui-icon name="hand pointer up outline" v-on:mouseover="largePointer($event)" v-on:mouseout="smallPointer($event)" />
                    </sui-table-cell>
                    <sui-table-cell>{{ user.id }}</sui-table-cell>
                    <sui-table-cell>{{ user.firstName }}</sui-table-cell>
                    <sui-table-cell>{{ user.lastName }}</sui-table-cell>
                    <sui-table-cell>{{ user.email }}</sui-table-cell>
                    <sui-table-cell></sui-table-cell>
                </sui-table-row>
            </sui-table-body>
        </sui-table>
    </div>
</template>
<script>
import {UserService} from '@/services/UserService'

export default {
    name: "UserList",
    
    mounted(){
        this.fetchAll()
    },

    data(){
        return {
            all: []
        }
    },

    methods: {
        fetchAll(){
            const service = new UserService()
            service.all().then(response => {
                this.all = response.data
            })
        },

        largePointer(e){
            if(!e.target.className.includes("large")){
                e.target.className += " large"
            }
        },

        smallPointer(e){
            e.target.className = e.target.className.replace("large", "")
        }
    },
}

</script>
