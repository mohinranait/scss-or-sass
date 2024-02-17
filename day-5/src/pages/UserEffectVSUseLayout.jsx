import { useEffect, useLayoutEffect } from "react";

const UserEffectVSUseLayout = () => {

useLayoutEffect(() => {
    // Before render
},[])

useEffect(() => {
    // After render
},[])

    return (
        <div>
        </div>
    );
};

export default UserEffectVSUseLayout;