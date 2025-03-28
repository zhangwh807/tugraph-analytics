/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

package com.antgroup.geaflow.dsl.runtime.function.graph.source;

import com.antgroup.geaflow.model.graph.meta.GraphMeta;
import com.antgroup.geaflow.state.DataModel;
import com.antgroup.geaflow.state.descriptor.GraphStateDescriptor;
import com.antgroup.geaflow.state.graph.StateMode;
import com.antgroup.geaflow.view.graph.GraphViewDesc;
import java.util.Iterator;

public class StaticGraphVertexScanSourceFunction<K> extends AbstractVertexScanSourceFunction<K> {

    public StaticGraphVertexScanSourceFunction(GraphViewDesc graphViewDesc) {
        super(graphViewDesc);
    }

    @Override
    protected Iterator<K> buildIdIterator() {
        return graphState.staticGraph().V().idIterator();
    }

    protected GraphStateDescriptor<K, ?, ?> buildGraphStateDesc() {
        GraphStateDescriptor<K, ?, ?> desc =  super.buildGraphStateDesc();
        desc.withDataModel(DataModel.STATIC_GRAPH);
        desc.withStateMode(StateMode.RW);
        desc.withGraphMeta(new GraphMeta(graphViewDesc.getGraphMetaType()));
        return desc;
    }
}
