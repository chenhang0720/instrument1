<template>
    <div class="hello">
        <h1>Users</h1>
        <form v-on:submit="addUser">
            <input type="test" v-model="newUser.id" placeholder="Enter id">
            <input type="test" v-model="newUser.account" placeholder="Enter account">
            <input type="test" v-model="newUser.email" placeholder="Enter email">
            <input type="test" v-model="newUser.Identity" placeholder="Enter Identity">
            <input type="test" v-model="newUser.createtime" placeholder="Enter createtime">
            <input type="test" v-model="newUser.updatetime" placeholder="Enter updatetime">
            <input type="submit" value="Submit" placeholder="submit">
        </form>
        <span>id | 账号 | 邮箱 | 身份 | 创建时间 | 更新时间</span>
        <ul>
            <li v-for="user in users" :key="user.id">
                <input type="checkbox" class="toggle" v-model="user.contact">
                <span>
                    {{user.id}} | {{user.account}} | {{user.email}} | {{user.Identity}} | {{user.createtime}} |
                    {{user.updatetime}}
                    <button v-on:click="deleteUser(user)">X</button>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: 'MainInterface',
        data() {
            return {
                z: 1,

                newUser: {},
                users: [],
            }
        },

        mounted() {
            this.updateList();
        },
        methods: {
            addUser: function (e) {
                e.preventDefault();
                this.$axios.post("http://localhost:3000/addUser/", this.newUser).then((response)=> {
                    console.log(response);
                }).catch(function (error) {
                    console.log(error);
                });
               
                // this.users.push({
                //     id: this.newUser.id,
                //     account: this.newUser.account,
                //     email: this.newUser.email,
                //     Identity: this.newUser.Identity,
                //     createtime: this.newUser.createtime,
                //     updatetime: this.newUser.updatetime,
                // })
            },

            updateList: function () {
                this.$axios.get("http://localhost:3000/listUsers/")
                    .then(
                        (response) => {
                            console.log(response.data);
                            this.users = response.data;
                        }
                    )
            },

            deleteUser: function (user) {
                console.log(user.id);
                let postbody= {id: user.id};
                console.log(postbody);
                this.$axios.post("http://localhost:3000/delUser", postbody).then((response)=> {
                    console.log(response);
                }).catch(function (error) {
                    console.log(error);
                });
               

                // console.log("hello");
                // this.users.splice(this.users.indexOf(user), 1);
               // console.log(id);
            },

        },
        props: {
            msg: String
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    a {
        color: #42b983;
    }
</style>