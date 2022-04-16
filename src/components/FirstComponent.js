import AnotherComponent from "./AnotherComponent";

function FirstComponent(){
    // Algum comentário
    const name = "Miguel";
    return(
        <div className="firstcomponent">
            {/* comentário no jsx */}
            <p>Primeiro componente</p>
            {2 +2}
            <p>Nome: {name}</p>
            <AnotherComponent />
        </div>
    );

}

export default FirstComponent;