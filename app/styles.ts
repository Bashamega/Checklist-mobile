import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#DAD3BE',
      alignItems: 'center',
      padding: 50,
      
    },
    heading: {
      fontWeight: 'bold',
      fontSize: 20,
      backgroundColor: "#B7B597",
      color: "#254336",
      padding: 15,
      borderRadius: 15,
      width: '100%',
      textAlign: 'center'
    },
    main:{
        backgroundColor:"#6B8A7A",
        marginTop: 50,
        width: '100%',
        borderRadius: 15,
        padding:15,
        
        
    },
    item:{
        
        backgroundColor: "#254336",
        padding: 15,
        borderRadius: 15,
        width: '100%',
        textAlign: 'center',
        flexDirection: 'row',
        marginBottom: 8,
        position: 'relative'
    
  },
    title:{
        color:'#fff',
        fontSize: 20,
        width:'80%'
    },
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#254336",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase",
    },
    white:{
      color:'#fff'
    },
    inputContainer:{
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        width: '100%',
        color: 'white'
    },icon:{
      position:'absolute',
      right:5,
      top:10
    }
  });
  