
import { Dimension } from "./dimension";
import { Database } from "./database";
import { Kpi } from "./kpi";

export class Requete {

    id!: number;
    code_requete!: number;
    date!: string;
    val_kpi!: string;
    val_kpi_alias!: string;
    copr!: string;
    date_image!: string;
    dims!: Dimension[];
    id_databasee!: Database;
    name_database!: Database;
    kpi!: Kpi;
}


