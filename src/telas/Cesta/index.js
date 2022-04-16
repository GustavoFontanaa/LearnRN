import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native";
import { View } from "react-native";
import Detalhes from "./componentes/Detalhes.js";
import Topo from "./componentes/Topo.js";




export default function Cesta() {
  return <>
    <SafeAreaView>
      <Topo />
      <View style={estilos.cesta}>
        <Detalhes />
      </View>
    </SafeAreaView>
  </>
}

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },


});
