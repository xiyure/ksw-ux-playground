import { AppContext } from 'vue';
import { DialogServiceOptions, DialogPayload } from './type';
import { MakeRequired } from '../../utils/typescript';
declare function showDialog(options: MakeRequired<DialogServiceOptions, 'confirm'>, appContext?: AppContext | null): () => void;
declare function showDialog(options: DialogServiceOptions, appContext?: AppContext | null): Promise<DialogPayload>;
export default showDialog;
