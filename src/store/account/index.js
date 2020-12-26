// import state from './state'
// import * as getters from './getters'
// import * as mutations from './mutations'
// import * as actions from './actions'

// export default {
//   namespaced: true,
//   state,
//   getters,
//   mutations,
//   actions
// }
import Axios from 'axios'

export default{
    namespaced:true,
    state:{
        currentUser:null,
        accessToken:null,
        idToken:null,
        userInfo:null,
    },
    getters:{
        isSignIn:state=>{
            return state.currentUser !== null
        },
        accessToken:state => {
            return state.currentUser? state.currentUser.signInUserSession.accessToken.jwtToken : null
        },
        idToken:state => {
            return state.currentUser? state.currentUser.signInUserSession.idToken.jwtToken : null
        },
        email:state=>{
            return state.userInfo? state.userInfo.data.email : null
        },
        userName:state=>{
            return state.userInfo? state.userInfo.data.name : null
        },
        uid:state=>{
            return state.userInfo? state.userInfo.data.user_id : null
        },
        friends:state=>{
            return state.userInfo? state.userInfo.data.friends: null
        },
    },
    mutations: {
        userSignInDone:function(state, data){
            state.currentUser = data
        },
        setUserInfo:function(state,data){
            state.userInfo = data
        },
    },
    actions:{
        async finishUserSignIn(context, data){
            console.log('finish sifnin')
            await context.commit('userSignInDone', data)
            let reqHeader = { headers:{
                'Content-Type':'application/json',
                'Authorization': context.getters['idToken']
                }
            }
            Axios.get("https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/user", reqHeader).then(res=>context.commit('setUserInfo',res))
        }
    },
}
