import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";
import {
  Wrapper,
  PublicationDate,
  JobTitle,
  JobLanguage,
  JobLink,
  JobCompany,
  Source,
  SourceLink,
  Tags
} from "./UI";

const jobLabels = {
  programming: "Programação",
  blockchain: "Blockchain",
  mobile: "Mobile",
  backend: "Back-End",
  frontend: "Front-End",
  devops: "DevOps",
  qa: "QA",
  design: "Design",
  content: "Conteúdo",
  social: "Social Media",
  support: "Suporte",
  manager: "Manager",
  sales: "Sales",
  finance: "Finanças"
};

const Job = ({ data }) => (
  <Wrapper itemScope itemType="http://schema.org/JobPosting">
    <PublicationDate>
      Publicado em
      <time itemProp="datePosted" dateTime={data.get("date")}>
        {format(data.get("date").replace("T00:00:00.000Z", ""), "DD/MM/YYYY")}
      </time>
      <JobLanguage>{data.get("language") === "en-us" ? "🌐" : "🇧🇷"}</JobLanguage>
    </PublicationDate>
    <JobTitle itemProp="title">
      <JobLink itemProp="url" href={data.get("url")} target="_blank" rel="noopener">
        {data.get("position")}
      </JobLink>
    </JobTitle>
    <JobCompany>@{data.get("company")}</JobCompany>
    <Source itemProp="source">
      <SourceLink href={data.get("sourceURL")} target="_blank" rel="noopener">
        {data.get("source")}
      </SourceLink>
      <Tags>
        ,{" "}
        {data
          .get("tags")
          .map(tag => jobLabels[tag])
          .join(", ")}
      </Tags>
    </Source>
  </Wrapper>
);

Job.propTypes = {
  data: PropTypes.object
};

export default Job;
