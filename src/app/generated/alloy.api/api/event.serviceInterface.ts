/*
Crucible
Copyright 2020 Carnegie Mellon University.
NO WARRANTY. THIS CARNEGIE MELLON UNIVERSITY AND SOFTWARE ENGINEERING INSTITUTE MATERIAL IS FURNISHED ON AN "AS-IS" BASIS. CARNEGIE MELLON UNIVERSITY MAKES NO WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, AS TO ANY MATTER INCLUDING, BUT NOT LIMITED TO, WARRANTY OF FITNESS FOR PURPOSE OR MERCHANTABILITY, EXCLUSIVITY, OR RESULTS OBTAINED FROM USE OF THE MATERIAL. CARNEGIE MELLON UNIVERSITY DOES NOT MAKE ANY WARRANTY OF ANY KIND WITH RESPECT TO FREEDOM FROM PATENT, TRADEMARK, OR COPYRIGHT INFRINGEMENT.
Released under a MIT (SEI)-style license, please see license.txt or contact permission@sei.cmu.edu for full terms.
[DISTRIBUTION STATEMENT A] This material has been approved for public release and unlimited distribution.  Please see Copyright notice for non-US Government use and distribution.
Carnegie Mellon(R) and CERT(R) are registered in the U.S. Patent and Trademark Office by Carnegie Mellon University.
DM20-0181
*/
/**
 * Alloy API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { ApiError } from '../model/apiError';
import { Event } from '../model/event';


import { Configuration }                                     from '../configuration';


export interface EventServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    

    /**
    * Creates a new Event
    * Creates a new Event with the attributes specified  &lt;para /&gt;  Accessible only to a SuperUser or an Administrator
    * @param event The data to create the Event with
    */
    createEvent(event?: Event, extraHttpRequestParams?: any): Observable<Event>;

    /**
    * Creates a new Event from a eventTemplate
    * Creates a new Event from the specified eventTemplate
    * @param eventTemplateId The ID of the EventTemplate to use to create the Event
    */
    createEventFromEventTemplate(eventTemplateId: string, extraHttpRequestParams?: any): Observable<Event>;

    /**
    * Deletes an Event
    * Deletes an Event with the specified id  &lt;para /&gt;  Accessible only to a SuperUser or a User on an Admin Team within the specified Event
    * @param id The id of the Event to delete
    */
    deleteEvent(id: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
    * Ends an Event
    * Ends an Event with the specified id  &lt;para /&gt;  Accessible only to a SuperUser or a User on an Admin Team within the specified Event
    * @param id The id of the Event to end
    */
    endEvent(id: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
    * Gets all Events for the indicated EventTemplate
    * Returns a list of all of the Events for the EventTemplate.
    * @param eventTemplateId 
    */
    getEventTemplateEvents(eventTemplateId: string, extraHttpRequestParams?: any): Observable<Array<Event>>;

    /**
    * Gets a specific Event by id
    * Returns the Event with the id specified  &lt;para /&gt;  Accessible to a SuperUser or a User that is a member of a Team within the specified Event
    * @param id The id of the Event
    */
    getEvent(id: string, extraHttpRequestParams?: any): Observable<Event>;

    /**
    * Gets all Event in the system
    * Returns a list of all of the Events in the system.  &lt;para /&gt;  Only accessible to a SuperUser
    */
    getEvents(extraHttpRequestParams?: any): Observable<Array<Event>>;

    /**
    * Gets the user&#39;s Events for the indicated EventTemplate
    * Returns a list of the user&#39;s Events for the EventTemplate.
    * @param eventTemplateId 
    */
    getMyEventTemplateEvents(eventTemplateId: string, extraHttpRequestParams?: any): Observable<Array<Event>>;

    /**
    * Gets the user&#39;s Events for the indicated Player View Id
    * Returns a list of the user&#39;s Events for the View.
    * @param viewId 
    */
    getMyViewEvents(viewId: string, extraHttpRequestParams?: any): Observable<Array<Event>>;

    /**
    * Redeploys the Caster Workspace of an Event
    * Redeploys the Caster Workspace for the Event with the specified id  &lt;para /&gt;  Accessible only to a SuperUser or a User on an Admin Team within the specified Event
    * @param id The id of the Event to redeploy
    */
    redeployEvent(id: string, extraHttpRequestParams?: any): Observable<{}>;

    /**
    * Updates an Event
    * Updates an Event with the attributes specified  &lt;para /&gt;  Accessible only to a SuperUser or a User on an Admin Team within the specified Event
    * @param id The Id of the Exericse to update
    * @param event The updated Event values
    */
    updateEvent(id: string, event?: Event, extraHttpRequestParams?: any): Observable<Event>;

}