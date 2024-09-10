import React from 'react';
import { ReactComponent as Java } from '../../assets/techno/Java.svg';
import { ReactComponent as Maven } from '../../assets/techno/Maven.svg';
import { ReactComponent as Spring } from '../../assets/techno/Spring.svg';
import { ReactComponent as Python } from '../../assets/techno/Python.svg';
import { ReactComponent as Numpy } from '../../assets/techno/Numpy.svg';
import { ReactComponent as NetworkX } from '../../assets/techno/NetworkX.svg';
import { ReactComponent as C } from '../../assets/techno/C.svg';
import { ReactComponent as Cpp } from '../../assets/techno/Cpp.svg';
import { ReactComponent as Bash } from '../../assets/techno/Bash.svg';
import { ReactComponent as MySQL } from '../../assets/techno/MySQL.svg';
import { ReactComponent as PostgreSQL } from '../../assets/techno/PostgreSQL.svg';
import { ReactComponent as MongoDB } from '../../assets/techno/MongoDB.svg';
import { ReactComponent as ElasticSearch } from '../../assets/techno/Elasticsearch.svg';
import { ReactComponent as Firebase } from '../../assets/techno/Firebase.svg';
import { ReactComponent as Postman } from '../../assets/techno/Postman.svg';
import { ReactComponent as Swagger } from '../../assets/techno/Swagger.svg';
import { ReactComponent as Insomnia } from '../../assets/techno/Insomnia.svg';
import CustomTooltip from '../CustomTooltip.tsx';

const Backend = () => {
    return (
        <div className="competence-box backend">
            <h1>Backend</h1>
            <div className='techno-competences'>
                <CustomTooltip title="Java">
                  <Java className="icon"/>
                </CustomTooltip>
                <CustomTooltip title="Maven">
                  <Maven className="icon"/>
                </CustomTooltip>
                <CustomTooltip title="Spring">
                  <Spring className="icon"/>
                </CustomTooltip>
                <CustomTooltip title="Python">
                  <Python className="icon"/>
                </CustomTooltip>
                <CustomTooltip title="Bash">
                  <Bash className="icon"/>
                </CustomTooltip>
                <CustomTooltip title="MySQL">
                  <MySQL className="icon"/>
                </CustomTooltip>
                <CustomTooltip title="PostgreSQL">
                  <PostgreSQL className="icon"/>
                </CustomTooltip>
                <CustomTooltip title="MongoDB">
                  <MongoDB className="icon"/>
                </CustomTooltip>
                <CustomTooltip title="ElasticSearch">
                  <ElasticSearch className="icon"/>
                </CustomTooltip>
                <CustomTooltip title="Firebase">
                  <Firebase className="icon"/>
                </CustomTooltip>
                <CustomTooltip title="Postman">
                  <Postman className="icon"/>
                </CustomTooltip>
                <CustomTooltip title="Swagger">
                  <Swagger className="icon"/>
                </CustomTooltip>
                <CustomTooltip title="Insomnia">
                  <Insomnia className="icon"/>
                </CustomTooltip>
            </div>
        </div>
    );
};

export default Backend;
