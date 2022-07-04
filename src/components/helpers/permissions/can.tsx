import {AbilityContext} from "./ability";
import { defineAbility } from "@casl/ability";

interface IProps {
    children?: any;
}

function AbilityContextComponent({children}: IProps) {
    const ability = defineAbility((can) => {
        can("read", "thing");
        can("create", "thing");
        can("update", "thing");
        can("destroy", "thing");
    });
    return (
        <>
            <AbilityContext.Provider value={ability}>
                {children}
            </AbilityContext.Provider>
        </>
    )
}

export default AbilityContextComponent;