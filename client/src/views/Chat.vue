<template>
	<div class="container" id="app">
        <div class="col-md-4 col-lg-6 offset-lg-3 offset-md-4">
            <div >
                <h4>Liebherr Chat</h4>
                <p v-for="item in info" v-bind:key="item">
                    <small>{{item.name}} {{item.type}}</small>
                </p>
            </div>
            <div class="card bg-info" >
                <div class="card-header text-white">
                    {{name}}
                </div>

                <ul class="list-group list-group-flush text-right">
                    <small v-if="typing" class="text-white">
                        <i>{{typing}} is typing</i>
                    </small>
                    <li class="list-group-item" v-for="message in messages" v-bind:key="message">
                        <span :class="{'float-left':(message.type===1)}">
                            {{message.message}}
                            <small>:{{message.by}}</small>
                        </span>
                    </li>
                </ul>

                <div class="card-body">
                    <form @submit.prevent="send">
                        <div class="form-group">
                            <input type="text" class="form-control" v-model="newmessage" placeholder="Type Here">
                        </div>
                    </form>
                </div>

            </div>
        </div>
	</div>
</template>

<script>
/* eslint-disable */
import EventBus from './EventBus'
import jwtDecode from 'jwt-decode'
import io from 'socket.io-client'
import router from '../router'
export default {
	name: 'aChat',
	data: function () {
		return {
			auth: '',
			newmessage: null,
                messages: [],
                typing: false,
                name: '',
                info: [],
				connectionCount: 0,
				socket: io("http://localhost:5000")
		}
	},
	methods: {
		send() {
                    this.socket.emit('chat-message', { message: this.newmessage, user: this.name })
                    this.messages.push({ message: this.newmessage, type: 0, by: 'Me' })
                    this.newmessage = null
                },
                isTyping() {
                    this.socket.emit('typing', this.name)
                }
            },
            mounted() {
                window.onbeforeunload = () => {
                    this.socket.emit('leaved', this.name)
                }
                this.socket.on('noOfConnections', (count) => {
                    this.connectionCount = count
                })
            },
            watch: {
                newmessage(value) {
                    value ? this.socket.emit('typing', this.name) : this.socket.emit('stoptyping')
                }
	},
	created() {
				
				const token = localStorage.usertoken
    			const decoded = jwtDecode(token)
				this.name = decoded.first_name

                this.socket.on('chat-message', (data) => {
                    this.messages.push({ message: data.message, type: 1, by: data.user })
                    this.typing = false
                })

                this.socket.on('typing', (data) => {
                    console.log(data)
                    this.typing = data
                })
                this.ocket.on('stoptyping', () => {
                    this.typing = false
                })
			}
	
	}
</script>
<style scoped>
	#app{
		margin-top: 40px;
        margin-bottom: 150px;
	}
</style>