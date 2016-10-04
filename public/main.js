'use strict'
// Front End
const socket = io()

socket.on('connect', () => console.log(`Socket connected: ${socket.id}`))
socket.on('disconnect', () => console.log('Socket disconnected'))