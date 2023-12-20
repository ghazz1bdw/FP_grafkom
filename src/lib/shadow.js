function setupmodelShadow(model) {
    model.traverse((child) =>{
        if(child.isMesh){
            child.castshadow = true;
            child.receiveshadow = true;
        }
    }
    );
}