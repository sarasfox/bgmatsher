FROM mcr.microsoft.com/dotnet/core/sdk:2.2-bionic AS buildWeb

WORKDIR /project

COPY wapi/ ../wapi
RUN dotnet restore ../wapi/*.csproj --no-dependencies
RUN dotnet build ../wapi/*.csproj --no-restore -c Release
RUN dotnet publish ../wapi/*.csproj --no-build -c Release -o out


FROM mcr.microsoft.com/dotnet/core/aspnet:2.2-alpine AS deploy

WORKDIR /project

EXPOSE 80
EXPOSE 443

COPY --from=buildWeb webapi/out ./
ENV ASPNETCORE_URLS="http://+:80"


#CMD ["ash"]
CMD [ "dotnet", "webapi.dll"]

