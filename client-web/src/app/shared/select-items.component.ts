import { SelectItem } from '../models/select-item.model';

export class CharacterList {
    static characterList: SelectItem[] = [
        { value: 'amber', label: 'Amber' },
        { value: 'barbara', label: 'Barbara' },
        { value: 'barbara', label: 'Barbara' },
        { value: 'beidou', label: 'Beidou' },
        { value: 'bennett', label: 'Bennett' },
        { value: 'chongyun', label: 'Chongyun' },
        { value: 'fisch', label: 'Fisch' },
        { value: 'diluc', label: 'Diluc' },
        { value: 'diona', label: 'Diona' },
        { value: 'jean', label: 'Jean' },
        { value: 'kaeya', label: 'Kaeya' },
        { value: 'keqing', label: 'Keqing' },
        { value: 'lisa', label: 'Lisa' },
        { value: 'mona', label: 'Mona' },
        { value: 'ningguang', label: 'Ningguang' },
        { value: 'noelle', label: 'Noelle' },
        { value: 'qiqi', label: 'Qiqi' },
        { value: 'razor', label: 'Razor' },
        { value: 'sucrose', label: 'Sucrose' },
        { value: 'sucrose', label: 'Sucrose' },
        { value: 'tartaglia', label: 'Tartaglia' },
        { value: 'venti', label: 'Venti' },
        { value: 'xiangling', label: 'Xiangling' },
        { value: 'xiao', label: 'Xiao' },
        { value: 'xinyan', label: 'Xinyan' },
        { value: 'xingqiu', label: 'Xingqiu' },
        { value: 'zhongli', label: 'Zhongli' },
    ];

    static levelBase: SelectItem[] = [
        { value: '1', label: '1' },
        { value: '20', label: '20' },
        { value: '40', label: '40' },
        { value: '50', label: '50' },
        { value: '60', label: '60' },
        { value: '70', label: '70' },
        { value: '80', label: '80' },
        { value: '90', label: '90' },
    ];

    static levelToGo: SelectItem[] = [
        { value: '20', label: '20' },
        { value: '40', label: '40' },
        { value: '50', label: '50' },
        { value: '60', label: '60' },
        { value: '70', label: '70' },
        { value: '80', label: '80' },
        { value: '90', label: '90' },
    ]
}